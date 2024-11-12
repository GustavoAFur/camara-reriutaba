
import { HeroContent } from "./HeroContent";
import { UserAction } from "./UserAction";
export function SectionHero() {
  return (
    <div className="relative bg-[#024c3d] sm:pb-32 h-[100vh] overflow-hidden flex justify-center items-center">
      <HeroContent />
      <div className="absolute bottom-[-2px] w-full flex justify-center">
        <UserAction /> 
      </div>
    </div>
  );
}