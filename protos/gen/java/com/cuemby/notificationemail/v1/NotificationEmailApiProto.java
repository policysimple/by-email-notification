// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cuemby/notification-email/v1/notification_email_api.proto

package com.cuemby.notificationemail.v1;

public final class NotificationEmailApiProto {
  private NotificationEmailApiProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_To_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_To_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_Cc_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_Cc_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_Bbc_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_Bbc_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_ReplyTo_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_ReplyTo_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_SendEmailRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_SendEmailRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_SendEmailInfoResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_SendEmailInfoResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_cuemby_notificationemail_v1_SendEmailResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_cuemby_notificationemail_v1_SendEmailResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n9cuemby/notification-email/v1/notificat" +
      "ion_email_api.proto\022\033cuemby.notification" +
      "email.v1\".\n\002To\022\022\n\004name\030\001 \001(\tR\004name\022\024\n\005em" +
      "ail\030\002 \001(\tR\005email\".\n\002Cc\022\022\n\004name\030\001 \001(\tR\004na" +
      "me\022\024\n\005email\030\002 \001(\tR\005email\"/\n\003Bbc\022\022\n\004name\030" +
      "\001 \001(\tR\004name\022\024\n\005email\030\002 \001(\tR\005email\"3\n\007Rep" +
      "lyTo\022\022\n\004name\030\001 \001(\tR\004name\022\024\n\005email\030\002 \001(\tR" +
      "\005email\"\275\002\n\020SendEmailRequest\022/\n\002to\030\001 \003(\0132" +
      "\037.cuemby.notificationemail.v1.ToR\002to\022/\n\002" +
      "cc\030\002 \003(\0132\037.cuemby.notificationemail.v1.C" +
      "cR\002cc\0222\n\003bbc\030\003 \003(\0132 .cuemby.notification" +
      "email.v1.BbcR\003bbc\022?\n\010reply_to\030\004 \003(\0132$.cu" +
      "emby.notificationemail.v1.ReplyToR\007reply" +
      "To\022\030\n\007subject\030\005 \001(\tR\007subject\022\020\n\003tag\030\006 \001(" +
      "\tR\003tag\022\022\n\004text\030\007 \001(\tR\004text\022\022\n\004html\030\010 \001(\t" +
      "R\004html\"+\n\025SendEmailInfoResponse\022\022\n\004send\030" +
      "\001 \001(\010R\004send\"\243\001\n\021SendEmailResponse\022\026\n\006sta" +
      "tus\030\001 \001(\tR\006status\022\030\n\007message\030\002 \001(\tR\007mess" +
      "age\022F\n\004info\030\003 \001(\01322.cuemby.notificatione" +
      "mail.v1.SendEmailInfoResponseR\004info\022\024\n\005e" +
      "rror\030\004 \001(\tR\005error2\211\001\n\033NotificationEmailA" +
      "PIService\022j\n\tSendEmail\022-.cuemby.notifica" +
      "tionemail.v1.SendEmailRequest\032..cuemby.n" +
      "otificationemail.v1.SendEmailResponseB\235\001" +
      "\n\037com.cuemby.notificationemail.v1B\031Notif" +
      "icationEmailApiProtoP\001Z\033cuemby/notificat" +
      "ionemail/v1\242\002\003CNX\252\002\033Cuemby.Notificatione" +
      "mail.V1\312\002\033Cuemby\\Notificationemail\\V1b\006p" +
      "roto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_cuemby_notificationemail_v1_To_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_cuemby_notificationemail_v1_To_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_To_descriptor,
        new java.lang.String[] { "Name", "Email", });
    internal_static_cuemby_notificationemail_v1_Cc_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_cuemby_notificationemail_v1_Cc_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_Cc_descriptor,
        new java.lang.String[] { "Name", "Email", });
    internal_static_cuemby_notificationemail_v1_Bbc_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_cuemby_notificationemail_v1_Bbc_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_Bbc_descriptor,
        new java.lang.String[] { "Name", "Email", });
    internal_static_cuemby_notificationemail_v1_ReplyTo_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_cuemby_notificationemail_v1_ReplyTo_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_ReplyTo_descriptor,
        new java.lang.String[] { "Name", "Email", });
    internal_static_cuemby_notificationemail_v1_SendEmailRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_cuemby_notificationemail_v1_SendEmailRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_SendEmailRequest_descriptor,
        new java.lang.String[] { "To", "Cc", "Bbc", "ReplyTo", "Subject", "Tag", "Text", "Html", });
    internal_static_cuemby_notificationemail_v1_SendEmailInfoResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_cuemby_notificationemail_v1_SendEmailInfoResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_SendEmailInfoResponse_descriptor,
        new java.lang.String[] { "Send", });
    internal_static_cuemby_notificationemail_v1_SendEmailResponse_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_cuemby_notificationemail_v1_SendEmailResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_cuemby_notificationemail_v1_SendEmailResponse_descriptor,
        new java.lang.String[] { "Status", "Message", "Info", "Error", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}