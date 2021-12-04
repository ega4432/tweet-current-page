let prevUrl = ""
let tweetWindowId: number | undefined
const targetUrl = "https://twitter.com/"

const getCurrentWindow = (tab: chrome.tabs.Tab) => {
  chrome.windows.getCurrent((current: chrome.windows.Window) => {
    const text = `${tab.title ? encodeURIComponent(tab.title) : ""} ${
      tab.url ? encodeURIComponent(tab.url) : ""
    }`

    openWindow(
      text,
      current.width ? Math.floor((current.width - 500) / 2) : 0,
      current.height ? Math.floor((current.height - 375) / 2) : 0
    )
  })
}

const openWindow = (query: string, left: number, top: number) => {
  const createData: chrome.windows.CreateData = {
    focused: true,
    left,
    top,
    height: 375,
    width: 500,
    type: "popup",
    url: `${targetUrl}intent/tweet?text=${query}`
  }

  chrome.windows.create(
    createData,
    (window: chrome.windows.Window | undefined) => {
      tweetWindowId = window?.id
    }
  )
}

// 拡張機能ボタンを押した際
chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  getCurrentWindow(tab)
})

// タブに更新があった際
chrome.tabs.onUpdated.addListener(
  (
    tabId: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab
  ) => {
    if (tab.url && changeInfo.status === "complete") {
      if (
        prevUrl &&
        ~tab.url.indexOf(targetUrl) &&
        prevUrl.indexOf(`${targetUrl}intent/tweet`) === 0
      ) {
        chrome.tabs.remove(tabId)
      }
      prevUrl = tab.url
    }
  }
)

// タブを削除した際
chrome.tabs.onRemoved.addListener(
  (tabId: number, removeInfo: chrome.tabs.TabRemoveInfo) => {
    // Note: ツイートウィンドウを開いてツイートせずに閉じた場合バグるため
    if (removeInfo.windowId === tweetWindowId) {
      prevUrl = ""
    }
  }
)
