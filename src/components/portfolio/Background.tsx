export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 grid-lines" />
      <div className="animate-orb absolute -top-40 left-[-10%] h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-orb absolute top-1/3 right-[-15%] h-[32rem] w-[32rem] rounded-full bg-accent/8 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-orb absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-glow/12 blur-[140px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
