import ProfileBanner from "src/components/do-task/profile-banner";
import { useResponsive } from "src/hooks/use-responsive";

export default function DoTaskView () {
  const mdUp = useResponsive('up', 'md');
  return (
    <ProfileBanner></ProfileBanner>
  );
}
