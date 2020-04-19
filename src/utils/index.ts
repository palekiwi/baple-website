import { DivisionName, DivisionHome } from "../types"

export function homeFromDomain(domain: DivisionName): DivisionHome {
  switch (domain) {
    case "plastics":
      return "/plastics/"
    case "metalPackaging":
      return "/metal-packaging/"
    case "energy":
      return "/energy/"
    case "engineering":
      return "/engineering/"
    default:
      return "/"
  }
}
