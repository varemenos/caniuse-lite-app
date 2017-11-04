import React, { Component } from 'react'
import * as lite from 'caniuse-lite'
import Autosuggest from 'react-autosuggest'

class Dropdown extends Component {
  constructor () {
    super()

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    )

    this.state = {
      value: '',
      suggestions: Object.entries(lite.features).map(([feature, data]) => ({
        feature,
        data
      }))
    }
  }

  getList () {
    return Object.entries(lite.features).map(([feature, data]) => (
      <option value={feature} key={feature} />
    ))
  }

  onSuggestionsFetchRequested ({ value, reason }) {
    console.log(value, reason)

    return value
  }

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: Object.entries(lite.features).map(([feature, data]) => ({
        feature,
        data
      }))
    })
  }

  getSuggestionValue (suggestion) {
    console.log(lite.feature(suggestion.data))

    return lite.feature(suggestion.data).title
  }

  renderSuggestion (suggestion, { isHighlighted }) {
    // console.log(suggestion, isHighlighted)
    const parsedData = lite.feature(suggestion.data)
    return (
      <span className={`status--${parsedData.status}`}>{parsedData.title}</span>
    )
  }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  render () {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: '',
      value,
      onChange: this.onChange
    }

    return (
      <div className='Dropdown'>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          focusInputOnSuggestionClick={false}
          shouldRenderSuggestions={() => true}
        />
      </div>
    )
  }
}

export default Dropdown
