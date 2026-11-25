import { useEffect, useState } from 'react'
import { adaptSdmVideos } from 'adapters/sdmAdapter'
import { apiClient } from 'lib/apiClient'

const useSdmVideos = () => {
    const [result, setResult] = useState({ videos: [], status: 'loading' })

    useEffect(() => {
        const controller = new AbortController()
        const loadVideos = async () => {
            try {
                const entries = await apiClient('/tzuchi/sdm.json', { signal: controller.signal })
                if (!Array.isArray(entries)) throw new Error('Invalid SDM video data')
                if (!controller.signal.aborted) {
                    setResult({ videos: adaptSdmVideos(entries), status: 'success' })
                }
            } catch {
                if (!controller.signal.aborted) setResult({ videos: [], status: 'error' })
            }
        }

        loadVideos()
        return () => controller.abort()
    }, [])

    return result
}

export default useSdmVideos
