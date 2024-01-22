import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FriendItem } from '../../../globalComponents/friend/friendItem'
import {
  SCREEN_MARGIN_HORIZONTAL,
  SPACE,
} from '../../../../../assets/constants'

export interface FriendListData {
  firstName: string
  id: number
}

const DATA = [
  {
    firstName: 'Joseph',
    id: 1,
  },
  {
    firstName: 'Angel',
    id: 2,
  },
  {
    firstName: 'White',
    id: 3,
  },
  {
    firstName: 'Olivier',
    id: 4,
  },
  {
    firstName: 'Nata',
    id: 5,
  },
  {
    firstName: 'Adam',
    id: 6,
  },
  {
    firstName: 'Sean',
    id: 7,
  },
  {
    firstName: 'Nicolas',
    id: 8,
  },
  {
    firstName: 'Frederic',
    id: 9,
  },
  {
    firstName: 'Gigi',
    id: 10,
  },
]

export const FriendsList = (): JSX.Element => {
  const pageSize = 4
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [renderedData, setRenderedData] = useState(DATA.slice(0, pageSize))

  const pagination = ({
    data,
    pgNumber,
    pgSize,
  }: {
    data: FriendListData[]
    pgNumber: number
    pgSize: number
  }): any[] => {
    const startIndex = (pgNumber - 1) * pgSize
    if (startIndex >= data.length) {
      return []
    }
    setPageNumber(pgNumber)
    return data.slice(startIndex, startIndex + pgSize)
  }

  const renderItem = (item: FriendListData): JSX.Element => (
    <FriendItem item={item} containerStyle={styles.friendItemContainer} />
  )

  return (
    <View>
      <FlatList
        data={renderedData}
        renderItem={item => renderItem(item.item)}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.container}
        onEndReachedThreshold={0.5} // when is scroll 50%
        onEndReached={() => {
          if (!isLoading) {
            setIsLoading(true)
            setRenderedData(prev => [
              ...prev,
              ...pagination({
                data: DATA,
                pgNumber: pageNumber + 1,
                pgSize: pageSize,
              }),
            ])
            setIsLoading(false)
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: SCREEN_MARGIN_HORIZONTAL,
  },

  container: {
    paddingRight: SCREEN_MARGIN_HORIZONTAL,
  },

  friendItemContainer: {
    marginRight: SPACE[24],
  },
})
