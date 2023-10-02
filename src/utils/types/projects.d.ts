declare interface ProjectProps {
  image: string | StaticImport;
  title: string;
  smallDescription: string;
  position: number;
  changeCurrentProject: (index: number) => void;
}

declare interface ProjectListProps {
  projectToSee: (index: number) => void;
}

declare interface ViewerProps {
  image: string | StaticImport;
  title: string;
  tags: string[];
  fullDescription: string;
  deploy: string;
  repository: string;
}

declare interface TagProps {
  content: string;
}

declare interface Project {
  id: number;
  image: StaticImageData;
  title: string;
  smallDescription: string;
  tags: string[];
  fullDescription: string;
  deploy: string;
  repository: string;
}

declare type Projects = Project[];
