import { adapter } from '../../core/utils'
import renderer from '../../core/reconciler'

class CachedImage {
  readonly image = adapter.createImage()
  private readonly targets: Function[] = []
  private _ready = false
  get empty() {
    return this.targets.length === 0
  }
  constructor(
    public readonly src: string
  ) {
    if (!this.image) {
      throw new Error('Revas: createImage must be initialized')
    }
    this.image.onload = this.onload
    this.image.onerror = this.onerror
    this.image.src = src
  }
  onload = () => {
    this._ready = true
    renderer.batchedUpdates(() => {
      this.targets.forEach(target => target(this.image))
    })
  }
  onerror = () => { }
  add(target: Function) {
    if (this.targets.indexOf(target) < 0) {
      this.targets.push(target)
      if (this._ready) {
        target(this.image)
      }
    }
  }
  remove(target: Function) {
    const index = this.targets.indexOf(target)
    this.targets.splice(index, 1)
  }
}

const cache = new Map<string, CachedImage>()


export function get(src: string, target?: Function) {
  if (!cache.has(src)) {
    cache.set(src, new CachedImage(src))
  }
  const cached = cache.get(src)!
  target && cached.add(target)
  return cached.image
}

export function remove(src: string, target: Function) {
  if (cache.has(src)) {
    const cached = cache.get(src)!
    cached.remove(target)
    if (cached.empty) {
      cache.delete(src)
    }
  }
}