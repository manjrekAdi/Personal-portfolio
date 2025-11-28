const SectionDivider = () => {
  return (
    <div className="section-divider relative w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default SectionDivider;

