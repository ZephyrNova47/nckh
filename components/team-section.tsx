"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Sparkles } from "lucide-react"
import Image from "next/image"

const supervisors = [
  {
    name: "Nguyen Thu Trang",
    title: "Ph.D",
    affiliation: "VNU-UET",
    image: "https://zephyrnova47.github.io/nckh/nguyen-thu-trang.png",
  },
  {
    name: "Nguyen Van Son",
    title: "Ph.D",
    affiliation: "VNU-UET",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nguyen%20Van%20Son-sN2KD8op9d7BjIppnvEqp3JQbjnqoQ.jpg",
  },
]

const members = [
  {
    name: "Lam Nguyen Duy Phong",
    title: "Student",
    program: "Computer Science",
    image:
      "https://zephyrnova47.github.io/nckh/phong-lam.jpg",
  },
  {
    name: "Nguyen Ha Linh",
    title: "Student",
    program: "Information System",
    image: "https://zephyrnova47.github.io/nckh/ha-linh-5.jpg",
  },
  {
    name: "Dang Dao Xuan Truc",
    title: "Student",
    program: "Computer Science",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dang%20Dao%20Xuan%20Truc-lUCS9ulprWLYOc5BFzWbYLAMrDaIE8.jpg",
  },
  {
    name: "Nguyen Hong Anh",
    title: "Student",
    program: "Computer Science",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nguyen%20Hong%20Anh-VsunewSOjT4yGkV4cBOhMhuG8J8gvV.jpg",
  },
  {
    name: "La Minh Duc",
    title: "Student",
    program: "Information System",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La%20Minh%20Duc-OWCbLuteq36Xx1LcSAKAjpG9qiXjLl.jpg",
  },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-background py-16 md:py-24 scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 right-10 h-4 w-4 animate-bounce rounded-full bg-orange-400/40"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-40 left-20 h-3 w-3 animate-bounce rounded-full bg-sky-400/40"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute left-10 top-1/2 h-2 w-2 animate-bounce rounded-full bg-violet-400/40"
          style={{ animationDelay: "1.4s" }}
        />
        <div
          className="absolute bottom-10 right-1/4 h-2.5 w-2.5 animate-bounce rounded-full bg-primary/30"
          style={{ animationDelay: "0.4s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full border-2 border-secondary px-4 py-1.5"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Research Team
            <Sparkles className="ml-1.5 h-3.5 w-3.5" />
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
            A dedicated group of researchers from the Faculty of Information Technology and the
            Intelligent Software Engineering (iSE) Laboratory.
          </p>
        </div>

        {/* Members (students) first */}
        <div className="mb-14">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lime-500 to-emerald-600 shadow-lg shadow-emerald-200/40">
              <Users className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Members</h3>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {members.map((member) => (
              <Card
                key={member.name}
                className="group overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-amber-300/50 hover:shadow-xl"
              >
                <CardContent className="relative pt-6 pb-4 text-center">
                  <div className="relative mx-auto mb-3 h-24 w-24 sm:h-28 sm:w-28">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-400 p-0.5 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                      <div className="h-full w-full overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-1 flex min-h-[2.5rem] items-center justify-center text-balance text-sm font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <Badge variant="secondary" className="mb-1.5 rounded-full text-[10px] sm:text-xs">
                    {member.title}
                  </Badge>
                  <p className="text-[11px] leading-snug text-muted-foreground sm:text-xs">
                    {member.program}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supervisors */}
        <div>
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 shadow-lg shadow-cyan-200/40">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Supervisors</h3>
          </div>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-6">
            {supervisors.map((supervisor) => (
              <Card
                key={supervisor.name}
                className="group min-w-[220px] max-w-[280px] flex-1 overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-violet-300/50 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-fuchsia-400 to-violet-500 opacity-10" />
                <CardContent className="relative pb-6 pt-8 text-center">
                  <div className="relative mx-auto mb-4 h-28 w-28">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 p-1 shadow-lg">
                      <div className="h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={supervisor.image}
                          alt={supervisor.name}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-foreground">{supervisor.name}</h4>
                  <Badge variant="secondary" className="mb-2 rounded-full">
                    {supervisor.title}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{supervisor.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
