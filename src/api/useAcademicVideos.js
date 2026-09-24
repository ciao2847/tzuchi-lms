import { useEffect, useState } from 'react'
import { adaptAcademicVideos } from 'adapters/speechAdapter'
import { SPEECH_REQUEST_URL } from 'constants/speech'
import { apiClient } from 'lib/apiClient'

const useAcademicVideos = ({ enabled = true } = {}) => {
    const [videos, setVideos] = useState([])
    const [status, setStatus] = useState(enabled ? 'loading' : 'idle')

    useEffect(() => {
        if (!enabled) {
            setStatus('idle')
            return undefined
        }

        const controller = new AbortController()

        const fetchVideos = async () => {
            setStatus('loading')

            try {
                const result = await apiClient(SPEECH_REQUEST_URL, {
                    signal: controller.signal
                })

                if (!Array.isArray(result)) {
                    throw new Error('Invalid academic video data')
                }

                setVideos(adaptAcademicVideos(result))
                setStatus('success')
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setVideos([])
                    setStatus('error')
                }
            }
        }

        fetchVideos()

        return () => controller.abort()
    }, [enabled])

    return { videos, status }
}

export default useAcademicVideos
