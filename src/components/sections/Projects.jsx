import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1) transition-all">
              <h3 className="text-xl font-bold mb-2">Snap vibe (Social Media Website)</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-2">
                <li>User Authentication: Secure sign-up, login, and logout using JWT</li>
                <li>Post Management: Users can create, edit, and delete posts with media support</li>
                <li>Like & Unlike Posts: Engage with content by liking or unliking posts</li>
                <li>Follow & Unfollow Users: Connect with others by following/unfollowing users</li>
                <li>Real-time Updates: Instantly reflect likes, follows, and new posts</li>
                <li>Responsive UI: Optimized for both desktop and mobile using Tailwind CSS</li>
                <li>Scalable Backend: Built with Node.js, Express.js, and MongoDB for efficient data handling</li>
                <li>User Profile Management: View and edit personal profiles, including profile pictures and bio</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1) transition-all">
              <h3 className="text-xl font-bold mb-2">I-Phone Website</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-2">
                <li>Real-time 3D model material updates</li>
                <li>Dynamic environment reflections</li>
                <li>Scroll-triggered animations</li>
                <li>Smooth page transitions</li>
                <li>Responsive video carousel</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "JavaScript", "Three JS", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1) transition-all">
              <h3 className="text-xl font-bold mb-2">Deepfake Detection Tool</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-2">
                <li>Developed a neural network model for deepfake detection with high accuracy</li>
                <li>Integrated the model into a Flask application for real-time analysis</li>
                <li>Designed a seamless UI for an intuitive user experience</li>
                <li>Implemented real-time face analysis to classify detected faces as real or fake</li>
                <li>Optimized performance for fast and efficient deepfake detection</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "CNN", "Neural Network", "Tensorflow"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};