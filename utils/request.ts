type TMethod = "POST" | "PUT" | "DELETE" | "GET";

interface RequestParams {
  method: TMethod;
  url: string;
  body?: Record<string, any>;
  params?: Record<string, string | number | boolean>;
}

export const request = async ({ method, url, body, params }: RequestParams) => {
  // Формируем query string, если есть params
  let fullUrl = url;
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    fullUrl += (url.includes('?') ? '&' : '?') + searchParams.toString();
  }

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    
  };
  try{
      const response = await fetch(fullUrl, options);
    
      if (!response.ok) {
        const error = {
            status : response.status,
            message : response.statusText
        }
        throw error;
      }
      return response.json();
  }
  catch{
    throw {
        status : 500,
        message : "Invalid Network Error"
    }
  }
};
