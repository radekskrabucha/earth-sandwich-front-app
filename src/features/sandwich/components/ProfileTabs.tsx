export const ProfileTabs: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <section className="layout-section py-0">
    <div className="flex flex-row justify-between gap-0 overflow-hidden rounded-xl">
      {children}
    </div>
  </section>
)
