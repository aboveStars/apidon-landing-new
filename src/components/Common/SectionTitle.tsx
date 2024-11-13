const SectionTitle = ({
  title,
  paragraph,
  width = "570px",

  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;

  mb?: string;
}) => {
  return (
    <>
      <div
        className="w-full md:mx-auto md:text-center "
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
