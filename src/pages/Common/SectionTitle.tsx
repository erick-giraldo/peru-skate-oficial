const SectionTitle = ({
  title,
  paragraph,
  paragraphBottom,
  width = "570px",
  center,
  mb = "100px",
  fontTitle,
}: {
  title: string;
  paragraph: string;
  paragraphBottom?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  fontTitle?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] ${fontTitle}`}>
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-sm !leading-relaxed text-body-color md:text-base mt-6">
          {paragraphBottom}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
