import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SliderWrapper from '@/components/common/SliderWrapper';

const Projects = () => {
  return <SliderWrapper title="Projects List" SliderCard={ProjectCard} data={projects} />;
};

export default Projects;
