import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Card from './card'
import sdk from 'service/cnode-sdk'
import { Topic as TopicType } from 'types'

const PAGE_SIZE = 20
const tag = 'all'
const Topic = () => {
  // const { tag = '' } = useParams()


  // const getTopicsByTab = useCallback(info => {
  //   return sdk.getTopicsByTab(tag, info.page || 1, PAGE_SIZE)
  // }, [tag])

  // 点击查看文章详情
  const history = useHistory()
  const visitArticle = (info: TopicType) => {
    history.push({
      pathname: `/article/${info.id}`,
      state: info
    })
  }
  const [list, setList] = useState([])
  const getTopicsByTab = () => {
    return sdk.getTopicsByTab(tag,  1, PAGE_SIZE).then(res => {
      setList(res.data)
    })
  }
  useEffect(()=> {
    getTopicsByTab()
  }, [])

  return (
    <>
      {
        list.map((item: TopicType) => {
          return (
            <Card key={item.id} data={item} onClick={() => visitArticle(item)} />
          )
        })
      }
    </>
  )
}

export default Topic