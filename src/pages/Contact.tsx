import { Card } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Label } from "@src/components/ui/label";
import { Mail, Twitter, Instagram, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@src/hooks/use-toast";
import ScrollReveal from "@src/components/ScrollReveal";
import PageTransition from "@src/components/PageTransition";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <div className="font-quicksand pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Whether you have questions about my work, speaking engagements, or media inquiries, I'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-12">
            <ScrollReveal delay={0.2} className="md:col-span-3">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-send-message">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Connect</h2>
              <p className="text-muted-foreground mb-6">
                Follow along on social media for updates, writing insights, and behind-the-scenes glimpses.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => console.log("Twitter clicked")}
                  data-testid="button-social-twitter"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  @ElenaAshford
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => console.log("Instagram clicked")}
                  data-testid="button-social-instagram"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  @ElenaAshfordWrites
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => console.log("Goodreads clicked")}
                  data-testid="button-social-goodreads"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Goodreads Profile
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Speaking & Events</h2>
              <p className="text-muted-foreground">
                Interested in having Elena speak at your event or conference? Please include details about the event, audience, and date in your message.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Media Inquiries</h2>
              <p className="text-muted-foreground">
                For press, interviews, or media requests, please use the contact form with "Media" in the subject line.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
