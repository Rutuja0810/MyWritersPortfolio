import { Card } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Label } from "@src/components/ui/label";
import { Mail, BookOpen, Instagram } from "lucide-react";
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
      title: "Message received!",
      description:
        "Thank you for reaching out. Your message has been safely delivered, and I'll respond as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
      <div className="font-quicksand pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                Let's Connect
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Thank you for visiting my corner of stories. Whether you'd like
                to discuss my novels, share your thoughts on my work,
                collaborate on a creative project, or simply connect as a fellow
                reader or writer, I'd be delighted to hear from you.
              </p>

              <div className="mt-10 max-w-2xl mx-auto">
                <div className="border-l-2 pl-6 text-left">
                  <p className="text-2xl italic font-medium leading-relaxed">
                    “Every story begins with a single voice. Thank you for
                    sharing yours.”
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    — RJ
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Section */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <ScrollReveal delay={0.2} className="lg:col-span-3">
              <Card className="p-8 md:p-10 rounded-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold">
                    Send a Message
                  </h2>

                  <p className="text-muted-foreground mt-2">
                    I'd love to hear from you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
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
                      className="mt-2"
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
                      className="mt-2"
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
                      className="mt-2"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    data-testid="button-send-message"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal delay={0.3} className="lg:col-span-2">
              <Card className="p-8 rounded-2xl h-fit">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Connect
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Follow my journey as I explore fantasy worlds, hidden
                  mysteries, and character-driven stories. Here you'll find
                  writing updates, novel progress, and glimpses into the
                  creative process behind my books.
                </p>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="justify-start w-full h-12 rounded-xl"
                    onClick={() => console.log("Instagram clicked")}
                    data-testid="button-social-instagram"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    @ElenaAshfordWrites
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start w-full h-12 rounded-xl"
                    onClick={() => console.log("Goodreads clicked")}
                    data-testid="button-social-goodreads"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Goodreads Profile
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <ScrollReveal delay={0.4}>
              <Card className="p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Collaborations
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Interested in discussing writing, storytelling,
                  worldbuilding, or creative projects? Feel free to reach out
                  with details, and I'll do my best to respond.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Card className="p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Media Inquiries
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  For interviews, reviews, publishing discussions, or other
                  professional inquiries, please mention the purpose of your
                  message in the subject line.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}