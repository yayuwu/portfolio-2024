import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
const cld = new Cloudinary({cloud: {cloudName: 'dkfa8olux'}})


export const logo = cld.image('yael_portfolio_2024/svg/p1wskaterslsvdpjfdfu').resize(fill().width(50)).toURL()
export const wppIcon = cld.image('yael_portfolio_2024/svg/javxkmp6vjvavzv4igtx').toURL()
export const linkedinIcon = cld.image('yael_portfolio_2024/svg/duvdoysl2juuxiubhquu').toURL()
export const githubIcon = cld.image('yael_portfolio_2024/svg/jdeblz9ocg3x32yfvt7p').toURL()
export const flechaIcon = cld.image('yael_portfolio_2024/svg/dofikaccqbtqtxryfzn7').toURL()


export const funkoshopHeader = cld.image('yael_portfolio_2024/projects/funkoshop/uwvnvpo5vwd9iev1pbpe').toURL()