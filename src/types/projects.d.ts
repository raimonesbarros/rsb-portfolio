declare interface ProjectProps {
  image: string | StaticImport
  title: string
  smallDescription: string
  position: number
  onProjectToSee: (index: number) => void
}

declare interface ProjectListProps {
  projectToSee: (index: number) => void
}

declare interface ViewerProps {
  image: string | StaticImport
  title: string
  tags: string[]
  fullDescription: string
  deploy: string
  repository: string
}

declare interface TagProps {
  content: string
}
