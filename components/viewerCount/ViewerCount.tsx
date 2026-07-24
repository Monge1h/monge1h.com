import { toast } from 'sonner'
import { useEffect, useContext } from 'react'
import { ViewCountContext } from '../../contexts/ViewsCountContext'
import { getDict, Locale } from '../../lib/i18n'

function ViewerCount({ locale }: { locale: Locale }) {
  const { setViewCount } = useContext(ViewCountContext)
  const dict = getDict(locale)

  useEffect(() => {
    const viewerCountDate = localStorage.getItem('viewerCount')

    const oneHourInMilliseconds = 60 * 60 * 1000
    const currentTime = Date.now()

    const isOneHourPassed = Number(viewerCountDate) + oneHourInMilliseconds < currentTime

    if (!viewerCountDate || isOneHourPassed) {
      fetch(`${process.env.NEXT_PUBLIC_VIEWS_API}/viewer-count`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('viewerCount', Date.now().toString())
          localStorage.setItem('numberOfViews', res.views.toString())
          setViewCount(res.views)
          toast.info(dict.toast.visitor.replace('{count}', res.views.toString()), {
            position: 'top-center',
          })
        })
        .catch(() => {
          /* the counter is decorative — ignore network failures */
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default ViewerCount
