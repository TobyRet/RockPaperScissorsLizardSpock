require 'sinatra'
require_relative './lib/RockPaperScissor.js'

get '/' do
  erb :index
end