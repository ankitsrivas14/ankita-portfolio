export const isMobile = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 620) {
		return true
	} else {
		return false
	}
}