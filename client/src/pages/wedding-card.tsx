import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Wedding card template data
const templates = [
  {
    id: "elegant",
    name: "Elegant Gold",
    description: "Classic golden borders with floral accents",
    preview: "linear-gradient(135deg, #f5e6d3 0%, #d4a574 100%)",
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description: "Clean lines with contemporary typography",
    preview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "floral",
    name: "Floral Garden",
    description: "Beautiful floral patterns with soft colors",
    preview: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    id: "traditional",
    name: "Traditional Indian",
    description: "Rich colors with traditional motifs",
    preview: "linear-gradient(135deg, #c2185b 0%, #7b1fa2 100%)",
  },
];

function WeddingCardPreview({ 
  groomName, 
  brideName, 
  weddingDate, 
  venue,
  template 
}: { 
  groomName: string; 
  brideName: string; 
  weddingDate: string; 
  venue: string;
  template: string;
}) {
  const selectedTemplate = templates.find(t => t.id === template) || templates[0];
  
  return (
    <div 
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: selectedTemplate.preview }}
    >
      {/* Decorative border */}
      <div className="absolute inset-3 border-2 border-white/30 rounded-xl" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
        {/* Top ornament */}
        <div className="text-4xl mb-4">💍</div>
        
        {/* Header */}
        <p className="text-sm tracking-[0.3em] uppercase opacity-80 mb-6">
          Wedding Invitation
        </p>
        
        {/* Names */}
        <h2 className="text-2xl md:text-3xl font-serif mb-1">
          {groomName || "Groom's Name"}
        </h2>
        <p className="text-2xl mb-1">&</p>
        <h2 className="text-2xl md:text-3xl font-serif mb-6">
          {brideName || "Bride's Name"}
        </h2>
        
        {/* Decorative line */}
        <div className="w-24 h-px bg-white/50 mb-6" />
        
        {/* Date & Venue */}
        <p className="text-lg font-medium mb-2">
          {weddingDate ? new Date(weddingDate).toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : "Wedding Date"}
        </p>
        <p className="text-sm opacity-80 max-w-[200px]">
          {venue || "Wedding Venue"}
        </p>
        
        {/* Bottom ornament */}
        <div className="absolute bottom-8 text-2xl">✦</div>
      </div>
    </div>
  );
}

export default function WeddingCard() {
  const [groomName, setGroomName] = useState("");
  const [brideName, setBrideName] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("elegant");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Wedding Card Creator</h1>
          <div className="w-[120px]" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Create Your Perfect Wedding Card
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design beautiful, personalized wedding invitations in minutes. 
            Choose from elegant templates and customize every detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="space-y-8">
            {/* Template Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Template</CardTitle>
                <CardDescription>Select a design that matches your style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedTemplate === template.id 
                          ? "border-primary ring-2 ring-primary/20" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div 
                        className="w-full h-16 rounded-lg mb-3"
                        style={{ background: template.preview }}
                      />
                      <p className="font-medium text-sm">{template.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Couple Details */}
            <Card>
              <CardHeader>
                <CardTitle>Couple Details</CardTitle>
                <CardDescription>Enter the names of the couple</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="groom">Groom's Name</Label>
                    <Input 
                      id="groom" 
                      placeholder="Enter groom's name"
                      value={groomName}
                      onChange={(e) => setGroomName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bride">Bride's Name</Label>
                    <Input 
                      id="bride" 
                      placeholder="Enter bride's name"
                      value={brideName}
                      onChange={(e) => setBrideName(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>When and where is the celebration?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Wedding Date</Label>
                  <Input 
                    id="date" 
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input 
                    id="venue" 
                    placeholder="Enter venue name and address"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Add a personal message to your guests..."
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button className="flex-1" size="lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </Button>
              <Button variant="outline" size="lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-6 text-center text-gray-700">
                Live Preview
              </h3>
              <div className="max-w-sm mx-auto">
                <WeddingCardPreview 
                  groomName={groomName}
                  brideName={brideName}
                  weddingDate={weddingDate}
                  venue={venue}
                  template={selectedTemplate}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Wedding Card Creator. Made with ❤️</p>
      </footer>
    </div>
  );
}
