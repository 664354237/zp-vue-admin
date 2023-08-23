import defaultSettings from '@/settings'

const title = defaultSettings.title || '招聘管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
