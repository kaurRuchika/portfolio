import Card from '../card/Card';
import { projects } from '../../data/projects.js';

export default function CardList() {
    return (
        <>
            {
                projects.map(project => {
                    return (
                        <Card key={project.id} 
                              id={project.id}
                              name={project.name}
                              description={project.description}
                              liveUrl={project.liveUrl}
                              liveUrl2={project.liveUrl2}
                              icons={project.icons} 
                        />
                    )
                })
            }
        </>        
    )
}