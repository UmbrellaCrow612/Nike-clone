interface SubBannerProps {}

export const SubBanner: React.FC<SubBannerProps> = () => {
  return (
    <div className="hidden w-full bg-base-200 md:block">
      <div className="max-w-screen-xl px-4 py-6 mx-auto">
        <p className="text-sm text-center">
          Members get free shipping and free 30-day returns.{' '}
          <span className="link">Join us</span>{' '}
          <span className="link">Learn more</span>
        </p>
      </div>
    </div>
  )
}
