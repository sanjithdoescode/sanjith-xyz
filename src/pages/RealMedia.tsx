import Navigation from '@/components/Navigation';

const RealMedia = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-mono">
            media.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            jk, lmao?
          </p>
        </div>

        {/* Image Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/96591d97-cea5-4dc5-bc0f-bba0a34d4a7f.png" 
              alt="Discord notification"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">the vibe check 💭</p>
          </div>
          
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/fe5e4608-f9ad-4d39-aa81-0937bafbea16.png" 
              alt="At hackathon event"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">me at the hackathon 👨‍💻</p>
          </div>
          
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/a0cffcd1-e7f3-4b09-8593-49985a7ff5c8.png" 
              alt="Hackathon certificate"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">hackathon runner-up 🏆</p>
          </div>
          
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/17717faf-378c-415d-b406-7571756ea3a4.png" 
              alt="Spotify personality analyzer"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">spotify says i'm deep 🎵</p>
          </div>
          
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/db82aca8-6d56-45cd-a8f8-6cf8883dc059.png" 
              alt="Hackathon display"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">farm direct - zero hunger 🌾</p>
          </div>
          
          <div className="break-inside-avoid space-y-4 mb-6">
            <img 
              src="/lovable-uploads/ff585eab-ea5a-4116-a7dd-001c7d03c886.png" 
              alt="Mountain landscape"
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            />
            <p className="text-sm text-muted-foreground text-center font-mono">nature therapy 🏔️</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            more random stuff coming soon... maybe 🤷‍♂️
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealMedia;