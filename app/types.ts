// types.ts
export interface Tool {
  lang: string;
  url: string;
}
export interface Resources {
  name: string;
  url: string;
}

export interface Novice {
    title: string;
    desc: string;
    tools: Tool[];
    resources: Resources[];
  }
  
  // Define the type for the entire JSON data structure
  export interface BooksData {
    novice: Novice[];
  }
  