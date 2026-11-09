import { NextStep } from "@/components/site/value";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, BookOpen, MessageCircle } from "lucide-react";

export default function StoryPage() {
  return (
    <div className="v-legacy min-h-screen blog-container">
      <Navbar />
      
      <main className="py-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="text-center mb-8">
            <p className="blog-quote text-3xl md:text-4xl italic font-light mb-6 leading-relaxed">
              Yesterday I forgot something I can't even remember today.
            </p>
            <div className="blog-divider"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6">
          <Card className="blog-content gentle-shadow rounded-3xl p-8 md:p-12 mb-12">
            {/* Title */}
            <header className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
                The Root Cause — A Dreamer's Confession
              </h1>
              <p className="text-muted-foreground text-lg">
                A deeply personal reflection on mental health, vulnerability, and healing
              </p>
              <div className="blog-divider mt-8"></div>
            </header>

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">The Root Cause</h2>
                <p className="blog-text mb-4">
                  I'm a traitor, who betrayed myself for no reasons. I'm a person who lied to my own self at every step of my life. No one is responsible for my suffering cos I only suffer from my own thoughts that could lead me to death. No I'm not a love failure, afterall idk how and what love is. No I'm not addicted to anything, afterall I'm a person who hates it. I don't want to listen to the smiles. Smiles of the people. I have 100 reasons to find myself wrong. But I don't have a single reason who proves myself right to me.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">Escapism</h2>
                <p className="blog-text mb-4">
                  Finally, the day is here which I was dreaming of, not thinking about for a long time. People around me said I'd start hating myself, and now I am. I'm angry at myself—not for my mistakes, but for a bunch of emotions; not for self-doubt, but for being kind; not for selfishness, but for being selfless every time. I am angry at myself because I never thought about myself, something I never wanted to do after my dad's death.
                </p>
                <p className="blog-text mb-4">
                  It's not about my mistakes, and it never was. I know them; I have always been aware of what I've done, but I thought someone could notice me. I was and am a people-pleaser. I showed my weaknesses to the world, and even to myself, because I was stuck on a quote of mine that says, "Self-analysis may always disclose a person's weakness which is hard to acknowledge."
                </p>
                <p className="blog-text mb-4">
                  Yes, I was like that right from my childhood. I never wanted to talk, feel free around others, exhibit myself, or wanted to try. I don't know why, and thinking about it now is useless because I don't remember how I behaved in my childhood. I only remember my anger, a legitimate patience for waiting for anything, adjustments, and the echoes of shattered voices (small fights and all).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">I'm Timid</h2>
                <p className="blog-text mb-4 italic text-center border-l-4 border-accent pl-6">
                  I'm timid with people of all kinds. I'm nervous and I won't deny it. - suryavamshi
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">I Don't Want to Stay</h2>
                <p className="blog-text mb-4">
                  I don't want to stay, but I do. I just can't handle how my silence yells, 'You are wrong, I can't stay,' and that's why I'm here. I don't want to stay. Why can't I feel comfortable for once. I don't want to stay because every person wants me to talk, but I can't express because it invalidates even my smile. So all I can say is I'm just here. But I can't go. What's wrong with me. It's not my mistakes, my parents' fights, or a girl's love, and that's why you're wrong. I just don't have any idea why I don't even want to open my mouth.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">They Have Bewildered Me</h2>
                <p className="blog-text mb-4">
                  They have bewildered me with their difficulties, kicked me into silences I've carried for years. I tried to stand up from my knees but nor can I sit within it for too long—or too short. And so, I choose rebellion. I choose to escape. I run further into myself, and I isolate. I'm at my worst.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">I Don't Want to Stay (Part II)</h2>
                <p className="blog-text mb-4">
                  I don't want to stay. I'm the weakest mind in a room full of open skills. I shrink around light because I don't know how to hold it. I don't want to stay. Because if I stay—you'll try to save me and I'm not sure I deserve saving.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">The Poem/Reality</h2>
                <p className="blog-text mb-4">
                  I'm angry at myself. I'll be angry at myself. I am not ready to think of my sorrows. I am trying to escape. Let me not be angry with myself. Let me not be angry with my past.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">She Asked Me</h2>
                <p className="blog-text mb-4">
                  "She asked me, 'Why can't you fall in love with someone who craves you?' And I almost laughed. Not at her, But at the thought that anyone could love a shadow still questioning if it's even real. I told her, 'I don't fear love. I fear being seen.' Because how can you offer a heart that you yourself don't believe exists?"
                </p>
              </section>

              <section className="mb-10">
                <h2 className="blog-subheading text-2xl md:text-3xl mb-6">I Have Lost My Anger</h2>
                <p className="blog-text mb-4">
                  I just lost my anger coz, I have been scapegoated. I have lost my smile, humor sense coz, I know the feelings of being bullied by jokes. I have lost my sense coz, I never existed. I have lost my voice coz, I habituated silence.
                </p>
              </section>

              <section className="mb-10">
                <div className="blog-divider"></div>
                <p className="blog-text mb-4 text-center italic">
                  What if I told you this and when you reply me I'll send you this Yeah ik you are that kind. Thank u... But you know what I try to indulge pain to me more and more and I wantedly search pain form every incidents that I observe and write and feel like I'm the one who is facing it...
                </p>
                <p className="blog-text mb-4 text-center italic">
                  But no worries I can recover myself and One thought a quote type was inculcated in my mind when you told me that
                </p>
                <p className="blog-text mb-4 text-center italic">
                  That is "yesterday I forgot something that I can't even remember today"...
                </p>
                <div className="blog-divider"></div>
              </section>
            </article>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-12 pt-8 border-t border-blog-border">
              <Button variant="outline" size="lg" className="gap-2">
                <Heart className="w-4 h-4" />
                Connect
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share Story
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Reflect
              </Button>
            </div>
          </Card>

          {/* Sidebar Message */}
          <Card className="blog-content gentle-shadow rounded-2xl p-6 mb-8">
            <div className="text-center">
              <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="blog-text text-lg mb-4">
                If you've ever felt like this, you're not alone. VOYCE is a space to share, reflect, and heal.
              </p>
              <Button asChild className="gap-2">
                <Link to="/stories">
                  <BookOpen className="w-4 h-4" />
                  Explore more stories
                </Link>
              </Button>
            </div>
          </Card>

          {/* Related Stories Section */}
          <Card className="blog-content gentle-shadow rounded-2xl p-8">
            <h3 className="blog-subheading text-2xl mb-6 text-center">Keep reading</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { to: "/article/overthinking-at-night", title: "Why your mind gets loud at night", note: "Essay" },
                { to: "/article/cannot-say-no", title: "When you cannot say no", note: "Essay" },
                { to: "/series", title: "The Unheard Mind", note: "Eight-part series" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-center p-4 border border-blog-border rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </main>
      
      <NextStep
        title="Let what you read settle for a minute."
        body="A short private check-in helps you notice how it landed."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/blog", label: "More slow reads" }}
      />
      <Footer />
    </div>
  );
}