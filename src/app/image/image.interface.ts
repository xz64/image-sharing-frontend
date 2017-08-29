interface ImageDTO {
  id: string,
  caption: string,
  owner: string,
  url: string
}

interface DeleteRequest {
  id: string
}

interface AddRequest {
  caption: string,
  url: string
}

export { ImageDTO, DeleteRequest, AddRequest };
