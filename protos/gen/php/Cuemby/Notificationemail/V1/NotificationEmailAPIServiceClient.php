<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Cuemby, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
namespace Cuemby\Notificationemail\V1;

/**
 * NotificationEmailAPI ...
 */
class NotificationEmailAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * SendEmail ...
     * @param \Cuemby\Notificationemail\V1\SendEmailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendEmail(\Cuemby\Notificationemail\V1\SendEmailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/cuemby.notificationemail.v1.NotificationEmailAPIService/SendEmail',
        $argument,
        ['\Cuemby\Notificationemail\V1\SendEmailResponse', 'decode'],
        $metadata, $options);
    }

}
