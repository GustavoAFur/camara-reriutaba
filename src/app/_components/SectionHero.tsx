import { HeroContent } from "./HeroContent";
import { UserAction } from "./UserAction";
export function SectionHero() {
  return (
    <div className="bg-[#024c3d] h-auto overflow-hidden flex flex-col justify-center items-center">
      <HeroContent />
      <div className="w-full flex justify-center">
        <UserAction />
      </div>
    </div>
  );
}
