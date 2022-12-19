import { useEffect, useState } from 'react'
import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import * as images from '../images/images'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [texture, setTexture] = useStore(state =>
    [state.texture, state.setTexture])

  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard()

  useEffect(() => {
    const visibilityTimeOut = setTimeout(() => {
      setVisible(false)
    }, 1000)

    setVisible(true)

    return () => clearTimeout(visibilityTimeOut)
  }, [texture])

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log
    }

    const selectedTexture = Object
      .entries(options)
      .find(([texture, isEnabled]) => isEnabled)

    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
    }
  }, [dirt, grass, glass, wood, log])

  return (
    <div className='texture-selector'>
      {
        Object
          .entries(images)
          .map(([imgKey, img]) => {
            return (
              <img
                className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                key={imgKey}
                src={img}
                alt={imgKey}
              />
            )
          })
      }
    </div>
  )
}
