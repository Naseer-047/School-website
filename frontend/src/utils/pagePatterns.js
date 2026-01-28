// This file contains the common loader replacement pattern for all pages

// BEFORE:
/*
if (loading) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Loading...</p>
            </div>
        </div>
    );
}
*/

// AFTER:
/*
import CreativeLoader from '../components/ui/CreativeLoader';

if (loading) {
    return <CreativeLoader text="Loading [PageName]" />;
}
*/

// Common hover effect patterns:
/*
1. Card hover:
   className="... hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"

2. Icon hover:
   className="... group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300"

3. Text hover:
   className="... group-hover:text-primary transition-colors"

4. Section title hover:
   className="... hover:scale-105 transition-transform duration-300 inline-block w-full"

5. Responsive font sizes:
   className="text-4xl md:text-5xl lg:text-6xl"
   className="text-lg md:text-xl"
*/

export const LOADER_PATTERN = 'CreativeLoader';
export const HOVER_EFFECTS = {
    card: 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer',
    icon: 'group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300',
    text: 'group-hover:text-primary transition-colors',
    title: 'hover:scale-105 transition-transform duration-300 inline-block w-full'
};
