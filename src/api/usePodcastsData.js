import useFetch from 'use-http'
import { parseXml, xml2json } from 'constants/utils'
import { formatTime } from 'constants/utils'

const usePodcastsData = () => {
	const options = {
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		}
	}
	const {
		loading,
		error,
		data: rawData
	} = useFetch(API_ROUTES.getPodcasts, options, [])
	const data = rawData
		? JSON.parse(xml2json(parseXml(rawData.data), '')).rss.channel.item
		: null
	const adjData = data?.map((item) => {
		const id = item.guid['#text']
		const title = item.title['#cdata']
		const cover = item['itunes:image']['@href']
		const summary = item['itunes:summary']['#cdata']
		const url = item.link
		const date = formatTime(new Date(item.pubDate), true)
		return { id, title, summary, cover, url, date }
	})
	return {
		loading,
		error,
		data: adjData
	}
}

export default usePodcastsData
