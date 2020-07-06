// prism seems to use custom typefaces monsterrat, but overrode
import "prismjs/themes/prism.css"
import "./src/styles/global.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
