export interface IInstagram {
    id: string
    caption: string
    media_url: string
    permalink: string
    "media_type": "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM",
    children: ChildrenPost
    timestamp: string
  }
  
  export interface ChildrenPost {
    data: Daum[]
  }
  
  export interface Daum {
    id: string
    media_url: string
  }
  