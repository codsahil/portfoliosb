
import { useState, useEffect } from 'react';
import { Star, GitFork, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/codsahil/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to load projects. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  // Function to get language color
  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-300',
      TypeScript: 'bg-blue-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      'C++': 'bg-purple-500',
      C: 'bg-gray-500',
      PHP: 'bg-indigo-500',
    };
    
    return colors[language] || 'bg-gray-400';
  };

  // Loading skeleton
  const ProjectSkeleton = () => (
    <div className="border rounded-lg p-5 bg-card">
      <div className="space-y-4">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-16 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center gradient-text">Featured Projects</h2>
        
        {error && (
          <div className="text-center p-8 bg-destructive/10 rounded-lg mb-8">
            <p className="text-destructive">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProjectSkeleton key={index} />
              ))
            : repos.map((repo) => (
                <div key={repo.id} className="project-card">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold truncate">
                        {repo.name.replace(/-/g, ' ')}
                      </h3>
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span 
                            className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}
                          ></span>
                          <span className="text-xs">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {repo.description || `A ${repo.language || 'web'} project by Sahil Bonagiri`}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics && repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star size={16} />
                          <span className="text-sm">{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={16} />
                          <span className="text-sm">{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </Button>
                      
                      {repo.homepage && (
                        <Button asChild size="sm" className="flex-1">
                          <a 
                            href={repo.homepage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <a 
              href="https://github.com/codsahil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
