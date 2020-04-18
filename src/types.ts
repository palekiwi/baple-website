import { FixedObject } from "gatsby-image"
// basic types
type Heading = string
type Subheading = string
type Logo = string
type Image = string
type Paragraph = string
type Body = Paragraph[]
type Label = string
type Advantage = string
type ContactName = string
type Phone = string
type Email = string
type Address = string[]
type Lang = "es"
type SocialMediaLink = string

interface SocialMedia {
  twitter?: SocialMediaLink
  facebook?: SocialMediaLink
  instagram?: SocialMediaLink
  youtube?: SocialMediaLink
}

export type DivisionName =
  | "group"
  | "plastics"
  | "energy"
  | "engineering"
  | "metalPackaging"

export interface Division {
  name: DivisionName
  home: string
  title: string
  navLinks: NavLink[]
}

export interface AppData extends Division {
  logo: {
    text: { childImageSharp: { fixed: FixedObject } }
    notext: { childImageSharp: { fixed: FixedObject } }
  }
}

export interface DivisionData extends Division {
  logo: {
    text: string
    notext: string
  }
}

type Layout =
  | "landing"
  | "404"
  | "categories"
  | "category"
  | "about"
  | "index"
  | "contact"

interface Quote {
  quote: string
  author: string
}

// compound types
export interface Link {
  to: string
  label: Label
}

export interface CategoryLink extends Link {
  image: Image
}

export interface NavLink extends Link {
  links?: Link[]
}

interface Param {
  key: string
  value: string
}

interface Spec {
  heading: Heading
  params: Param[]
}

interface CategoryItem {
  heading: Heading
  image: Image
  body: Body
  link: Link
  spec: Spec[]
}

interface ProductListItem {
  heading: Heading
  subheading: Subheading
  image: Image
  body: Body
  link: Link
}

export interface ContactInfo {
  contactName: ContactName
  phone: Phone
  email: Email
  address: Address
  socialMedia: SocialMedia
}

type Contact = ContactInfo[]

interface Nav {
  home: string
  navLinks: NavLink[]
}

interface App {
  title: string
  lang: Lang
  logo: Logo
  navLinks: NavLink[]
  contact: Contact
}

// sections
interface Section {
  heading?: Heading
  subheading?: Subheading
  body?: Body
  link?: Link
}

interface ImageSection extends Section {
  image?: Image
}

interface Welcome extends ImageSection {
  logo?: Logo
  quotes?: Quote[]
}

interface More extends ImageSection {
  logo: Logo
}

interface Categories extends ImageSection {
  categoryLinks: CategoryLink[]
}

interface Products extends Section {
  productList: ProductListItem[]
}

interface Advantages extends Section {
  points: Advantage[]
}

type TCS = ImageSection
type QAS = ImageSection
type Intro = ImageSection

interface ContactUs extends ImageSection {
  logo: Logo
}

interface ContactDetails extends Section {
  contact: Contact
}

interface About extends ImageSection {
  logo?: Logo
}

interface NotFound extends ImageSection {
  logo: Logo
}

interface CategoryList extends Section {
  categoryItems: CategoryItem[]
}

type Sections =
  | Welcome
  | About
  | ContactUs
  | ContactDetails
  | Categories
  | More
  | Advantages
  | TCS
  | QAS
  | NotFound
  | CategoryList

// pages
interface Page {
  layout: Layout
  underConstruction?: boolean
  sections: {
    [key: string]: Sections
  }
}

export interface NotFoundPage extends Page {
  layout: "404"
  sections: {
    notFound: NotFound
  }
}
