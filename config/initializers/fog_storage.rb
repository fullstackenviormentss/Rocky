if ENV['AWS_ACCESS_KEY_ID']
  FOG_STORAGE = Fog::Storage.new({
    :provider                 => 'AWS',
    :aws_access_key_id        => ENV['AWS_ACCESS_KEY_ID'],
    :aws_secret_access_key    => ENV['AWS_SECRET_ACCESS_KEY']
  })
else
  FOG_STORAGE = Fog::Storage.new({
    :local_root => '~/fog',
    :provider   => 'Local'
  })
end