type FetchOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
};

class ApiClient {
  private async fetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
    const { method = "GET", body, headers = {} } = options;

    const defaultHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    const response = await fetch(
      `http://localhost:1337/api/${url}?populate=cover`,
      {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: defaultHeaders,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return response.json();
  }

  public async get<T>(url: string): Promise<T> {
    return this.fetch<T>(url, { method: "GET" });
  }

  public async post<T>(url: string, body: any): Promise<T> {
    return this.fetch<T>(url, { method: "POST", body });
  }

  public async put<T>(url: string, body: any): Promise<T> {
    return this.fetch<T>(url, { method: "PUT", body });
  }

  public async delete<T>(url: string): Promise<T> {
    return this.fetch<T>(url, { method: "DELETE" });
  }
}

export default new ApiClient();
