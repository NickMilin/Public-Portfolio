import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
// import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8">
          <div className="container mx-auto max-w-5xl">
            <div className="flex justify-center pt-8">
              <a
                href="https://www.linkedin.com/in/nicholas-milin-6735a6276"
                target="_blank"
                className="flex items-center space-x-2 cosmic-button"
              >
                <Linkedin size={24} />
                <span>Connect with Me on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
