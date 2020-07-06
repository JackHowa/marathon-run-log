// prism seems to use custom typefaces monsterrat, but overrode
import "prismjs/themes/prism.css"
import "./src/styles/global.css"

exports.onServiceWorkerUpdateFound = () => {
  if (
    window.confirm(
      "This site has been updated with new data. Do you wish to reload the site to get the new data?"
    )
  ) {
    window.location.reload(true);
  }
};
