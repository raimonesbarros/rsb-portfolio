declare interface UserType {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

declare interface IssueType {
  number?: number
  title: string
  created_at?: string
  body: string
}

declare interface IssueInfoType {
  total_count: number
  items: IssueType[]
}

declare interface BlogPostProps extends IssueType {
  id: number | undefined
  onPostViewer: (postNumber: number | undefined) => void
  createdAt?: string
}

declare interface PostHeaderProps {
  post: {
    html_url: string
    title: string
    created_at: string
    comments: number
    user: {
      login: string
    }
  }
}

declare interface CurrentPostType {
  post: {
    html_url: string
    number: number
    title: string
    created_at: string
    comments: number
    body: string
    user: {
      login: string
    }
  }
}

declare interface BlogPostProps extends IssueType {
  id: number | undefined
  onPostViewer: (postNumber: number | undefined) => void
  createdAt?: string
}

declare interface PostHeaderProps {
  post: {
    html_url: string
    title: string
    created_at: string
    comments: number
    user: {
      login: string
    }
  }
}

declare interface CurrentPostType {
  html_url: string
  title: string
  created_at: string
  comments: number
  body: string
  user: {
    login: string
  }
}

declare interface UserType {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

declare interface IssueType {
  number?: number
  title: string
  created_at?: string
  body: string
}

declare interface IssueInfoType {
  total_count: number
  items: IssueType[]
}
