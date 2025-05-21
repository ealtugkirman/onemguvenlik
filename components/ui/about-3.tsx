import { Button } from "@/components/ui/button"
import Image from "next/image"

interface About3Props {
  title?: string
  description?: string
  mainImage?: {
    src: string
    alt: string
  }
  secondaryImage?: {
    src: string
    alt: string
  }
  breakout?: {
    src: string
    alt: string
    title?: string
    description?: string
    buttonText?: string
    buttonUrl?: string
  }
  companiesTitle?: string
  companies?: Array<{
    src: string
    alt: string
  }>
  achievementsTitle?: string
  achievementsDescription?: string
  achievements?: Array<{
    label: string
    value: string
  }>
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
]

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
]

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="mb-8 md:mb-14 grid gap-4 md:gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-5 md:gap-7 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Image
              src={mainImage.src || "/placeholder.svg"}
              alt={mainImage.alt}
              width={800}
              height={620}
              className="w-full h-auto max-h-[620px] rounded-xl object-cover"
              unoptimized={mainImage.src?.startsWith("http")}
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-7">
            <div className="flex flex-col justify-between gap-4 sm:gap-6 rounded-xl bg-muted p-5 sm:p-7">
              <Image
                src={breakout.src || "/placeholder.svg"}
                alt={breakout.alt}
                width={128}
                height={128}
                className="mr-auto h-20 sm:h-32 w-auto"
                unoptimized={breakout.src?.startsWith("http")}
              />
              <div>
                <p className="mb-2 text-base sm:text-lg font-semibold">{breakout.title}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto mt-2" asChild>
                <a href={breakout.buttonUrl} target="_blank" rel="noreferrer">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <div className="relative w-full h-48 sm:h-64 md:h-auto">
              <Image
                src={secondaryImage.src || "/placeholder.svg"}
                alt={secondaryImage.alt}
                fill
                className="rounded-xl object-cover"
                unoptimized={secondaryImage.src?.startsWith("http")}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 relative overflow-hidden rounded-xl bg-muted p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-sm sm:text-base text-muted-foreground">{achievementsDescription}</p>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-6 md:gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-2 md:gap-4" key={item.label + idx}>
                <p className="text-sm sm:text-base">{item.label}</p>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  )
}
